// for element type
interface IElemet {
  type: string;
  buttonText?: string;
  onClick?: () => void;
  text?: string;
}
//  for  text
interface IUserText {
  text: string | undefined;
}

// for button
interface IUserButton {
  buttonText: string | undefined;
  onClick?: () => void;
}

export type {IUserText, IUserButton, IElemet};
