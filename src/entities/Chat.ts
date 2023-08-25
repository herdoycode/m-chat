export default interface Chat {
  _id: string;
  users: [string];
  latestMessage: string;
}
