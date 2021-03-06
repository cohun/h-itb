import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Search = ({ setActive }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();

  const searchItem = (item) => {
    router.push({
      pathname: '/SearchItems',
      query: { name: item },
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    setActive('');
    searchItem(searchTerm);
    setSearchTerm('');
  };

  return (
    <form className="field has-addons" onSubmit={handleSearch}>
      <div className="control has-icons-left">
        <input
          className="input is-info is-focused"
          type="text"
          placeholder="Termék keresése"
          value={searchTerm}
          required
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <span className="icon is-small is-left">
          <figure className="image is-24x24">
            <Image width={24} height={24} src="/search.png" alt="Search" />
          </figure>
        </span>
      </div>
      <div className="control">
        <button className="button is-info" type="submit" onClick={handleSearch}>
          Keresés
        </button>
      </div>
    </form>
  );
};

export default Search;
