import { expect } from 'chai';
import calculate from "./calculate";

global.expect = expect;

describe("calculate", function() {
    test(["6"], { next: "6" });
  
    test(["6", "6"], { next: "66" });
  
    test(["6", "+", "6"], {
      next: "6",
      total: "6",
      operation: "+",
    });
  
    test(["6", "+", "6", "="], {
      total: "12",
    });
  
    test(["0", "0", "+", "0", "="], {
      total: "0",
    });
  
    test(["6", "+", "6", "=", "9"], {
      next: "9",
    });
  
    test(["3", "+", "6", "=", "+"], {
      total: "9",
      operation: "+",
    });
  
    test(["3", "+", "6", "=", "+", "9"], {
      total: "9",
      operation: "+",
      next: "9",
    });
  
    test(["3", "+", "6", "=", "+", "9", "="], {
      total: "18",
    });
  
});
  