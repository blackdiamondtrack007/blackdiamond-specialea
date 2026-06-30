export default function NewsPage() {
  return (
    <section className="w-full">
      <div className="container pt-12 md:pt-15 lg:pt-30">
        <iframe
          className="w-full h-72 border-8 border-primary rounded-xl"
          src="https://widget.myfxbook.com/widget/news.html"
        ></iframe>
      </div>
    </section>
  );
}
