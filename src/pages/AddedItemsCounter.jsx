import React from "react";
import { observer } from "mobx-react";
import cartStore from "./CartStore";

const AddedItemsCounter = observer(() => {
  return (
      <sub>:{cartStore.totalAddedItems}</sub>
  );
});

export default AddedItemsCounter;
