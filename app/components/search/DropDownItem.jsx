// Component used on the 'search' page. E.g. 'priceFrom', 'priceTo' dropdowns.
const DropDownItems = ({
  value = "",
  name = "",
  disabled = false,
  selected = false,
  id,
}) => {
  // const selectedElement = (e) => {
  //   onClick({ field: e.target.id, value: e.target.value });
  // };

  return (
    <>
      <option value={value} disabled={disabled} selected={selected} id={id}>
        {name}
      </option>
    </>
  );
};

export default DropDownItems;
