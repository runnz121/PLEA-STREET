import React,{useState} from "react";
import { useSelect } from "downshift";
import styled from "styled-components";
import ShowPage from "../page/ShowPage"


const DropDownContainer = styled.div`
  width: 200px;
`;

const DropDownHeader = styled.button`
  padding: 10px;
  display: flex;
  border-radius: 6px;
  border: 1px solid red;
`;

const DropDownHeaderItemIcon = styled.div``;

const DropDownHeaderItem = styled.p``;

const DropDownList = styled.ul`
  max-height: "200px";
  overflow-y: "auto";
  width: "150px";
  margin: 0;
  border-top: 0;
  background: "white";
  list-style: none;
`;

const DropDownListItem = styled.li`
  padding: 5px;
  background: ${props => (props.ishighlighted ? "#A0AEC0" : "")};
  border-radius: 8px;
`;


function DownShift({items}){


  const [gu, setGu] = useState({
        value: null
      })

      console.log(gu)

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({items
    ,onSelectedItemChange:({selectedItem}) => {
      setGu(selectedItem.value);
    }
  });


  return (
    <DropDownContainer>
      <DropDownHeader {...getToggleButtonProps()}>
        {(selectedItem && selectedItem.value) || "구로 조회"}
      </DropDownHeader>

      <DropDownList {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <DropDownListItem
              ishighlighted={highlightedIndex === index}
              key={`${item.id}${index}`}
              {...getItemProps({ item, index })}
            >
              {item.value}
            </DropDownListItem>
          ))}
      </DropDownList>
      <div tabIndex="0" />
    </DropDownContainer>
  );
};

export default DownShift