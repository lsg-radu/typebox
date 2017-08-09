/*--------------------------------------------------------------------------

typebox - runtime structural type system for javascript.

The MIT License (MIT)

Copyright (c) 2017 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/


import * as typebox from "../../src/index"
import * as assert  from "assert"

describe("reflect", () => {
  it("should reflect a undefined",   () =>  assert.equal(typebox.reflect(undefined),     "undefined"))
  it("should reflect a null",        () =>  assert.equal(typebox.reflect(null),          "null"))
  it("should reflect a function #1", () =>  assert.equal(typebox.reflect(function() {}), "function"))
  it("should reflect a function #2", () =>  assert.equal(typebox.reflect(() => {}),      "function"))
  it("should reflect a string",      () =>  assert.equal(typebox.reflect("hello"),       "string"))
  it("should reflect a number #1",   () =>  assert.equal(typebox.reflect(1),             "number"))
  it("should reflect a number #2",   () =>  assert.equal(typebox.reflect(NaN),           "number"))
  it("should reflect a boolean",     () =>  assert.equal(typebox.reflect(true),          "boolean"))
  it("should reflect a date",        () =>  assert.equal(typebox.reflect(new Date()),    "date"))
  it("should reflect an array",      () =>  assert.equal(typebox.reflect([]),            "array"))
  it("should reflect an complex",    () =>  assert.equal(typebox.reflect({}),            "complex")) 
})

export {/** */}