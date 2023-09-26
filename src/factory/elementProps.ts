// for element type
interface IElemet {
  type: string;
  buttonText?: string;
  onClick?: () => void;
  text?: string;
}
//  for  text
interface ITextElement {
  text: string | undefined;
}

// for button
interface IButtonElement {
  buttonText: string | undefined;
  onClick?: () => void;
}

export type {ITextElement, IButtonElement, IElemet};
