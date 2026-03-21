import { useEffect, useState } from 'react'

type LastfmWidgetProps = {
  username: string
  apiKey: string
}

type LastfmTrack = {
  name: string
  artist: string
  album: string
  imageUrl: string | null
  url: string
  playcount?: string
}

type LastfmApiImage = {
  '#text': string
  size: string
}

type LastfmTopTrack = {
  name: string
  url: string
  playcount?: string
  artist: {
    name: string
  }
  image?: LastfmApiImage[]
}

type LastfmTrackInfo = {
  name: string
  url: string
  artist: {
    name: string
  }
  album: {
    title?: string
    image?: LastfmApiImage[]
  }
}

type LastfmApiResponse = {
  toptracks?: {
    track?: LastfmTopTrack | LastfmTopTrack[]
  }
}

type LastfmTrackInfoResponse = {
  track?: LastfmTrackInfo
}

function getPreferredImage(images: LastfmApiImage[] = []) {
  const preferredImage =
    images.find((image) => image.size === 'extralarge' && image['#text']) ??
    images.find((image) => image.size === 'large' && image['#text']) ??
    images.find((image) => image['#text'])

  return preferredImage?.['#text'] || null
}

function normalizeTopTrack(track: LastfmTopTrack, trackInfo?: LastfmTrackInfo): LastfmTrack {
  const albumTitle = trackInfo?.album?.title || 'Unknown album'
  const albumImage = getPreferredImage(trackInfo?.album?.image)

  return {
    name: track.name,
    artist: track.artist.name,
    album: albumTitle,
    imageUrl: albumImage || getPreferredImage(track.image),
    url: track.url,
    playcount: track.playcount,
  }
}

async function fetchTrackInfo(apiKey: string, artist: string, track: string, signal: AbortSignal) {
  const url = new URL('https://ws.audioscrobbler.com/2.0/')
  url.searchParams.set('method', 'track.getInfo')
  url.searchParams.set('api_key', apiKey)
  url.searchParams.set('artist', artist)
  url.searchParams.set('track', track)
  url.searchParams.set('autocorrect', '1')
  url.searchParams.set('format', 'json')

  const response = await fetch(url, { signal })

  if (!response.ok) {
    throw new Error(`Last.fm track info request failed with ${response.status}`)
  }

  const data = (await response.json()) as LastfmTrackInfoResponse
  return data.track
}

function LastfmWidget({ username, apiKey }: LastfmWidgetProps) {
  const [track, setTrack] = useState<LastfmTrack | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    const loadTrack = async () => {
      try {
        setIsLoading(true)

        const url = new URL('https://ws.audioscrobbler.com/2.0/')
        url.searchParams.set('method', 'user.gettoptracks')
        url.searchParams.set('user', username)
        url.searchParams.set('api_key', apiKey)
        url.searchParams.set('period', '1month')
        url.searchParams.set('limit', '1')
        url.searchParams.set('format', 'json')

        const response = await fetch(url, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(`Last.fm request failed with ${response.status}`)
        }

        const data = (await response.json()) as LastfmApiResponse
        const rawTrack = Array.isArray(data.toptracks?.track)
          ? data.toptracks.track[0]
          : data.toptracks?.track

        if (!rawTrack) {
          setTrack(null)
          return
        }

        let trackInfo: LastfmTrackInfo | undefined

        try {
          trackInfo = await fetchTrackInfo(apiKey, rawTrack.artist.name, rawTrack.name, controller.signal)
        } catch (trackInfoError) {
          if (!controller.signal.aborted) {
            console.error('Failed to load Last.fm track info', trackInfoError)
          }
        }

        setTrack(normalizeTopTrack(rawTrack, trackInfo))
      } catch (error) {
        if (controller.signal.aborted) {
          return
        }

        console.error('Failed to load Last.fm track', error)
        setTrack(null)
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    loadTrack()

    return () => {
      controller.abort()
    }
  }, [apiKey, username])

  if (isLoading) {
    return (
      <div className='music-widget container' aria-live='polite'>
        <div className='music-widget__shell'>
          <div className='music-widget__cover music-widget__cover--placeholder' />
          <div className='music-widget__meta'>
            <p className='music-widget__eyebrow'>Loading top track</p>
            <p className='music-widget__title'>Connecting to Last.fm</p>
          </div>
        </div>
      </div>
    )
  }

  if (!track) {
    return null
  }

  return (
    <div className='music-widget container'>
      <a
        className='music-widget__shell'
        href={track.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        {track.imageUrl ? (
          <img
            src={track.imageUrl}
            alt={`${track.album} cover art`}
            className='music-widget__cover'
            loading='lazy'
          />
        ) : (
          <div className='music-widget__cover music-widget__cover--placeholder' aria-hidden='true' />
        )}

        <div className='music-widget__meta'>
          <h2 className='music-widget__title'>{track.name}</h2>
          <p className='music-widget__detail'>{track.artist}</p>
          <p className='music-widget__detail'>{track.album}</p>
        </div>
      </a>
    </div>
  )
}

export default LastfmWidget