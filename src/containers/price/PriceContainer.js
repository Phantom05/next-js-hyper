import React from "react";
import { MainWrapper } from "@/components/common/wrapper";

import { PriceCard } from "@/components/common/card";
import { ProductCardList } from "@/components/common/listing";

import _ from "lodash";
import { useImmer } from "use-immer";

const PriceContainerState = {
  selectData: null,
};
function PriceContainer(props) {
  const [values, setValues] = useImmer(PriceContainerState);
  console.log(props, "props");
  const handleClick = (config) => {
    const { type } = config;
    if (type === "selectItem") {
      console.log(config.id);
      console.log(props.data);
      const findData = props.data.find((item) => item.id === config.id);

      setValues((draft) => {
        draft.selectData = findData;
      });
    }
  };
  return (
    <div>
      <MainWrapper>
        <ProductCardList data={props.data} onClick={handleClick} />

        <PriceCard data={values.selectData || {}} />
      </MainWrapper>
    </div>
  );
}

export default PriceContainer;
