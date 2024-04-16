import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
        filterField={"discount"}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "sort by name (A-Z)" },
          { value: "name-dsc", label: "sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "sort by price (low first)" },
          { value: "regularPrice-dsc", label: "sort by price (high first)" },
          { value: "maxCapacity-asc", label: "sort by capacity (low first)" },
          { value: "maxCapacity-dsc", label: "sort by capacity (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
