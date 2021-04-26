export interface IProps {}

export interface IChar {
  id: string;
  name: string;
  email: string;
}

export interface ICardEntry {
  character: IChar;
}

export interface IState {
  characters: Array<IChar>;
  searchField: string;
}
