import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Autosuggest from "react-autosuggest";

const Search = ({ setActive }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const router = useRouter();

  const searchItem = (item) => {
    router.push({
      pathname: "/SearchItems",
      query: { name: item },
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    setActive("");
    searchItem(searchTerm);
    setSearchTerm("");
  };

  return (
    <form className="field has-addons" onSubmit={handleSearch}>
      <div className="control has-icons-right">
        {/* <input
          className="input is-primary is-focused"
          type="text"
          placeholder="Search for Products"
          value={searchTerm}
          required
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input> */}
        <div className="dropdown is-info is-focused m-1 pb-1">
          <Autosuggest
            inputProps={{
              placeholder: "Kezdj írni a kereséshez...",
              autoComplete: "abcd",
              value: searchTerm,
              name: "contr",
              onChange: (_event, { newValue }) => {
                setSearchTerm(newValue);
              },
            }}
            suggestions={suggestions}
            onSuggestionsFetchRequested={({ value }) => {
              if (!value) {
                setSuggestions([]);
                return;
              }
              const inputValue = value.trim().toLowerCase();
              const inputLength = inputValue.length;
              const contr = [
                "acél sodronykötél",
                "adapter daru",
                "adapter targonca",
                "asztal",
                "bakállvány",
                "bakdaru",
                "csörlő",
                "csúszásgátló",
                "daru komponensek",
                "daru",
                "darumérleg",
                "elektromos emelő",
                "emelési pont",
                "emelő heveder",
                "emelőasztal",
                "emelőgerenda",
                "emelőlánc",
                "emelőszem",
                "fogasléces emelő",
                "fonatolt kötelek",
                "fordítócsiga",
                "futó daru",
                "futómacska",
                "függeszték",
                "gyűjtőkarika",
                "hordófogó",
                "horog",
                "id",
                "irg",
                "irs",
                "karos emelő",
                "kézi targonca",
                "konzoldaru",
                "könnyűszerkezetes daru",
                "körkötél",
                "kötélvonszoló",
                "lánc",
                "láncfüggeszték",
                "láncos emelő",
                "lrg",
                "magasemelésű targonca",
                "mágnes",
                "megfogó",
                "mobil emelőasztal",
                "olajemelő",
                "összekötő elem",
                "pántszalag",
                "pneumatikus emelő",
                "poliészter",
                "poliészter",
                "rakományhatároló",
                "rakományrögzítő",
                "sarokvédő",
                "sekli",
                "sodronykötél függeszték",
                "sodronykötél",
                "szerelőkosár",
                "szivattyú emelő",
                "vákuumos emelő",
              ];

              const shortList =
                inputLength === 0
                  ? []
                  : contr.filter(
                      (ca) =>
                        ca.toLowerCase().slice(0, inputLength) === inputValue
                    );
              setSuggestions(shortList);
            }}
            onSuggestionsClearRequested={() => {
              setSuggestions([]);
            }}
            getSuggestionValue={(suggestion) => suggestion}
            renderSuggestion={(suggestion) => (
              <div className="tag is-warning is-medium mt-1">{suggestion}</div>
            )}
          />
        </div>

        <span className="icon is-small is-right pb-2 pl-2">
          <figure className="image is-12x12">
            <Image width={12} height={12} src="/search.png" alt="Search" />
          </figure>
        </span>
      </div>
      <div className="control">
        <button
          className="tag is-info is-medium is-responsive px-4"
          type="submit"
          onClick={handleSearch}
        >
          Keresés
        </button>
      </div>
    </form>
  );
};

export default Search;
