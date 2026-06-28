import "./news.css";

export default function NewsPage() {
  return (
    <div className="mt-100">
      <iframe
        id="news-main"
        className="w-full h-screen bg-red-500 border-8 border-red-500"
        src="https://widget.myfxbook.com/widget/news.html"
      ></iframe>
    </div>
  );
}
