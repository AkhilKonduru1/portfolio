import { NextResponse } from 'next/server';
import SpotifyWebApi from 'spotify-web-api-node';

const CHILL_PLAYLIST_ID = '37i9dQZF1EIfH4we62RxMe';

export async function GET() {
  try {
    const spotifyApi = new SpotifyWebApi({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    });

    const tokenData = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(tokenData.body['access_token']);

    const playlistData = await spotifyApi.getPlaylistTracks(CHILL_PLAYLIST_ID, {
      limit: 10
    });

    const formattedTracks = playlistData.body.items
      .filter((item) => {
        const track = item.track as any;
        return track && track.name && track.artists && track.album;
      })
      .map((item) => {
        const track = item.track as any;
        return {
          name: track.name,
          artist: track.artists[0]?.name ?? 'Unknown',
          album: track.album.name,
          url: track.external_urls?.spotify ?? '#',
          albumArt: track.album.images?.[0]?.url ?? null
        };
      });

    return NextResponse.json({
      topTracks: formattedTracks,
      topArtists: []
    });
  } catch (error) {
    console.error('Error fetching Spotify playlist:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Spotify data' },
      { status: 500 }
    );
  }
}
