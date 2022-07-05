interface ISearch {
  placeholder: string;
  value: string;
  onChange: (e?: any) => void;
}

const Search = (props: ISearch) => {
  return (
    <input data-testid='search' type="text" onChange={props.onChange} placeholder={props.placeholder} value={props.value} />
  );
};

export default Search;
