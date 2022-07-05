interface ISearch {
  placeholder: string;
  value: string;
  onChange: () => void;
}

const Search = (props: ISearch) => {
  return (
    <input data-testid='search' type="text" placeholder={props.placeholder} value={props.value} />
  );
};

export default Search;
