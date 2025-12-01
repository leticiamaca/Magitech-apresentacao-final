export default function VideoPlayer({ videoUrl }) {
  const getYouTubeId = (url) => {
    // Remove parâmetros desnecessários (como ?si=...)
    const cleanUrl = url.split('?')[0].split('&')[0];
    
    // Formato: https://youtu.be/VIDEO_ID
    if (cleanUrl.includes('youtu.be/')) {
      return cleanUrl.split('youtu.be/')[1];
    }
    
    // Formato: https://www.youtube.com/watch?v=VIDEO_ID
    if (cleanUrl.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(url.split('?')[1]);
      return urlParams.get('v');
    }
    
    // Formato: https://www.youtube.com/embed/VIDEO_ID
    if (cleanUrl.includes('youtube.com/embed/')) {
      return cleanUrl.split('embed/')[1];
    }
    
    return null;
  };
  
  const videoId = getYouTubeId(videoUrl);
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&showinfo=0&modestbranding=1`;
  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden">
      {/* YouTube iframe */}
      <iframe
        src={embedUrl}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video Player"
      ></iframe>
    </div>
  );
}
