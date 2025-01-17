import { _testTextMessage } from "../util";
import { TextMessage } from "../model";
import { util } from "near-runtime-ts";
import { Box } from "../generic";

describe("Round Trip", () => {
  it("should return the same TextMessage", () => {
  const message = _testTextMessage();
  //@ts-ignore
  const messageFromStorage = util.parseFromBytes<TextMessage>(message.serialize());
  expect<string>(messageFromStorage.sender).toStrictEqual("mysteriousStranger", "Incorrect data value (sender) for retrieved object");
  expect<string>(messageFromStorage.text).toStrictEqual("Hello world", "Incorrect data value (text) for retrieved object");
  expect<u64>(messageFromStorage.number).toBe(415, "Incorrect data value (number) for retrieved object");
  });

  it("should handle empty Message", () => {
    const message = new TextMessage();
    //@ts-ignore
    const messageFromStorage = util.parseFromBytes<TextMessage>(message.serialize());
    expect<string>(messageFromStorage.sender).toStrictEqual(message.sender, "Incorrect data value (sender) for retrieved object");
    expect<string>(messageFromStorage.text).toStrictEqual(message.text, "Incorrect data value (text) for retrieved object");
    expect<u64>(messageFromStorage.number).toBe(message.number, "Incorrect data value (number) for retrieved object");

  });

  it("should handle generics", () => {
    const u32 = new Box<u32>();
    u32.t = 42;
    //@ts-ignore
    const u32_2 = util.parseFromBytes<Box<u32>>(u32.serialize());
    expect<u32>(u32.t).toBe(u32_2.t);
  })
})

class Generic<T> {
  constructor(public value: T){}
}

class Foo{}
export const Foo_ID = idof<Foo>();
export const Generic_i32_ID = idof<Generic<i32>>();
export const Generic_Foo_ID = idof<Generic<Foo>>();





function foo<T>(): string {
  return nameof<T>();
}

function makeArray<T>(): T {
  let t = instantiate<T>();
  if (isArray<T>()){
    //@ts-ignore
    t.push(42);
  }
  return t;
}
describe("Instantiated array", ()=> {
  it("starts with a length of zero", () => {
    let arr = instantiate<Array<i32>>();
    expect<i32>(arr.length).toBe(0);
  })

  it("can have an item added to it", () => {
    let arr = makeArray<u32[]>();
    expect<u32>(arr[0]).toBe(42)
  })
})

function isBox<T>(): bool {
  return nameof<T>().startsWith("Box")
}


describe("Generic classes",() => {
  it("can use instanceof", () => {
    let genericFoo = new Generic<Foo>(new Foo());
    expect<boolean>(genericFoo instanceof Generic<Foo>).toBe(true);
  });
});