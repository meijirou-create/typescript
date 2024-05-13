// import { render } from "@testing-library/react"
// import { SimpleButton } from "./SimpleButton";

// test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
//     render(<SimpleButton />);
//   });


// import { render,screen } from "@testing-library/react";
// import { SimpleButton } from "./SimpleButton";
//  
// test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
//   render(<SimpleButton />);
//   const simpleButton = screen.getAllByRole("button");
//   expect (simpleButton).toHaveTextContent("OFF");
// });


import { render, screen, fireEvent } from '@testing-library/react';
import { SimpleButton }from './SimpleButton';

test('ボタンをクリックするとON/OFFの表示が切り替わる', () => {
  render(<SimpleButton />);
  const simpleButton = screen.getByRole("button"); // getAllByRole の代わりに getByRole を使用する
  expect(simpleButton).toHaveTextContent("OFF");

  fireEvent.click(simpleButton); // ボタンをクリックする

  expect(simpleButton).toHaveTextContent("ON");
});

test("描画されてすぐはOFFと表示されている", () => {
    const view = render(<SimpleButton />);
    expect(view.container).toMatchSnapshot();
  });
