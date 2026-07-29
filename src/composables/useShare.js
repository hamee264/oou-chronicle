import * as htmlToImage from "html-to-image";

export async function generateShareImage() {
  const node = document.getElementById("share-card");

  if (!node) {
    throw new Error("Share card not found");
  }

  return await htmlToImage.toBlob(node, {
    pixelRatio: 2,
    cacheBust: true,
  });
}

export async function shareArticle(post) {
  const blob = await generateShareImage();

  const file = new File([blob], "oou-chronicle.png", {
    type: "image/png",
  });

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share({
      title: post.title,
      text: post.excerpt,
      files: [file],
      url: window.location.href,
    });
  } else {
    alert("Sharing is not supported on this device.");
  }
}
