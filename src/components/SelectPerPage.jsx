function SelectPerPage({ setPerPage, perPage }) {
  const onChange = (e) => {
    const num = Number(e.target.value);
    if (num > 10) {
      alert("Please select a number less than or equal to 10");
    } else {
      setPerPage(e.target.value);
    }
  };
  return (
    <div>
      <input
        className="select-per-page"
        type="number"
        value={perPage}
        onChange={onChange}
        placeholder="Select per page"
      />
    </div>
  );
}

export default SelectPerPage;
