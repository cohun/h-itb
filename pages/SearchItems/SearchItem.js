const SearchItem = ({ term, searchItems }) => {
  console.log(term);
  let refArray;

  const resFiltered = searchItems.filter(
    (item) => item.fields.search === term.toLowerCase()
  );

  resFiltered.length >= 1
    ? (refArray = resFiltered[0].fields.references)
    : console.log('No');
  console.log(refArray);

  return (
    <section className="section mt-6">
      <article className="panel is-primary">
        <p className="panel-heading">
          <span>Search hits for: </span>
          <span className="has-text-warning is-size-5">...{term}...</span>
        </p>

        {refArray ? (
          refArray.map((ref) => {
            return (
              <a key={ref.fields.name} className="panel-block is-active">
                <span className="panel-icon">
                  <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                {ref.fields.productGroupId}
                <span className="panel-icon">
                  <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                {ref.fields.name}
              </a>
            );
          })
        ) : (
          <a className="panel-block is-active">
            <span className="panel-icon">
              <i className="fas fa-book" aria-hidden="true"></i>
            </span>
            no data
          </a>
        )}
      </article>
    </section>
  );
};

export default SearchItem;
