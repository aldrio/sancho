/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Sheet, SheetPositions } from "../Sheet";
import { Button } from "../Button";
import { MenuList, MenuItem, MenuDivider } from "../Menu";

export const SheetExamples = storiesOf("Sheet", module)
  .add("basic example", () => {
    return (
      <Example position={"left"} label={"hi"}>
        <div>
          Helloooo world!
          <button>one</button>
          <button>two</button>
          <button>tjree</button>
          <button>four</button>
          <div
            data-scroll-lock-scrollable
            style={{
              border: "1px solid",
              width: "100px",
              height: "100px",
              overflow: "scroll"
            }}
          >
            <div style={{ height: "200px" }}>scrollable</div>
          </div>
        </div>
      </Example>
    );
  })
  .add("Different positions", () => {
    const positions: SheetPositions[] = ["top", "left", "right", "bottom"];

    const examples = positions.map(position => {
      return (
        <React.Fragment key={position}>
          <Example position={position} label={position}>
            <div>
              Helloooo world!
              <button>one</button>
              <button>two</button>
              <button>tjree</button>
              <button>four</button>
            </div>
          </Example>
        </React.Fragment>
      );
    });

    return (
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          "& > *": {
            margin: "1rem",
            width: "200px"
          }
        }}
      >
        {examples}
      </div>
    );
  })
  .add("Sheet menu", () => {
    return (
      <Example position="bottom">
        <MenuList css={{ display: "block" }}>
          <MenuItem>Hello world number 1</MenuItem>
          <MenuItem>Hello world number 2</MenuItem>
          <MenuItem disabled>Hello world number 2</MenuItem>
          <MenuItem
            onSelect={() => {
              alert("selected!");
            }}
          >
            try selecting me
          </MenuItem>
          <MenuItem>Hello world number 2</MenuItem>
          <MenuDivider />
          <MenuItem>Hello world number 2</MenuItem>
          <MenuItem>Hello world number 2</MenuItem>
        </MenuList>
      </Example>
    );
  })
  .add("Scroll lock", () => {
    return (
      <Example position="bottom">
        <MenuList css={{ display: "block" }}>
          <MenuItem>Hello world number 1</MenuItem>
          <MenuItem>Hello world number 2</MenuItem>
          <MenuItem disabled>Hello world number 2</MenuItem>
          <MenuItem
            onSelect={() => {
              alert("selected!");
            }}
          >
            try selecting me
          </MenuItem>
          <MenuItem>Hello world number 2</MenuItem>
          <MenuDivider />
          <MenuItem>Hello world number 2</MenuItem>
          <MenuItem>Hello world number 2</MenuItem>
        </MenuList>
      </Example>
    );
  })
  .add("vertical swipe test", () => {
    return (
      <Example position="top">
        <MenuList css={{ display: "block" }}>
          <MenuItem>Hello world number 1</MenuItem>
          <MenuItem>Hello world number 2</MenuItem>
          <MenuItem disabled>Hello world number 2</MenuItem>
          <MenuItem
            onSelect={() => {
              alert("selected!");
            }}
          >
            try selecting me
          </MenuItem>
          <MenuItem>Hello world number 2</MenuItem>
          <MenuDivider />
          <MenuItem>Hello world number 2</MenuItem>
          <MenuItem>Hello world number 2</MenuItem>
        </MenuList>
      </Example>
    );
  });

const Example = ({
  label = "show",
  position = "left",
  children
}: {
  position?: SheetPositions;
  label?: string;
  children: React.ReactNode;
}) => {
  const [show, setShow] = React.useState(false);

  return (
    <div
      css={{
        minHeight: "150vh"
      }}
    >
      <Button onPress={() => setShow(true)}>{label}</Button>
      <Sheet
        onRequestClose={() => setShow(false)}
        isOpen={show}
        position={position}
      >
        {children}
      </Sheet>
    </div>
  );
};
