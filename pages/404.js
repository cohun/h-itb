function PageNotFound() {
  return (
    <div>
      <section className="pt-6"></section>
      <section className="py-6">
        <div className="notification is-info mx-6 title has-text-centered">
          <button className="delete"></button>
          Ez az oldal nem elérhető, menj a <strong>kezdőlapra</strong>!
        </div>
      </section>
    </div>
  );
}

export default PageNotFound;
