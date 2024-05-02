import React from "react";
import { observer } from "mobx-react";
import cartStore from "./CartStore";

const AddedItemsCounter = observer(() => {
  return (
      <p>:{cartStore.totalAddedItems}</p>
  );
});

export default AddedItemsCounter;
