window.onload = () => {
  const music = document.getElementById("bg-music");
  const slider = document.getElementById("volume-slider");
  const video = document.getElementById("video-bg");

  // Set volume
  music.volume = 0.5;

  // Ensure autoplay
  video.play().catch(err => console.warn("Video play failed:", err));
  music.play().catch(err => console.warn("Music play failed:", err));

  // Volume slider updates
  slider.addEventListener("input", () => {
    music.volume = slider.value / 100;
  });
};
