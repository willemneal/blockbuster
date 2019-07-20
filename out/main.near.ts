
      import { storage, near, base64 } from "./near";
      import { JSONEncoder } from "./json/encoder";
      import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "./json/decoder";
      import {init as wrapped_init, totalSupply as wrapped_totalSupply, balanceOf as wrapped_balanceOf, allowance as wrapped_allowance, transfer as wrapped_transfer, approve as wrapped_approve, transferFrom as wrapped_transferFrom} from "./main";
      
      // Runtime functions
      @external("env", "return_value")
      declare function return_value(value_len: usize, value_ptr: usize): void;
    
import {collections as collections,context as context,storage as storage,near as near} from "./near";
export class __near_ArgsParser_init extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_init>;
        handledRoot: boolean = false;
      
__near_param_initialOwner: String;
setString(name: string, value: String): void {
if (name == "initialOwner") {
            this.__near_param_initialOwner = <String>value;
            return;
          }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "initialOwner") {
        this.__near_param_initialOwner = <String>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {

        return super.pushArray(name);
      }
}
export function init(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_init();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_init>(handler);
      handler.decoder.deserialize(json);
wrapped_init(
handler.__near_param_initialOwner
);
}
export class __near_ArgsParser_totalSupply extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_totalSupply>;
        handledRoot: boolean = false;
      
setNull(name: string): void {

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {

        return super.pushArray(name);
      }
}
export function totalSupply(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_totalSupply();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_totalSupply>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_totalSupply(

);

        let encoder = new JSONEncoder();
      
if (result != null) {
            encoder.setString(null, result);
          } else {
            encoder.setNull(null);
          }

        let val = encoder.serialize();
        return_value(val.byteLength, <usize>val.buffer);
      
}
export class __near_ArgsParser_balanceOf extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_balanceOf>;
        handledRoot: boolean = false;
      
__near_param_tokenOwner: String;
setString(name: string, value: String): void {
if (name == "tokenOwner") {
            this.__near_param_tokenOwner = <String>value;
            return;
          }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "tokenOwner") {
        this.__near_param_tokenOwner = <String>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {

        return super.pushArray(name);
      }
}
export function balanceOf(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_balanceOf();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_balanceOf>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_balanceOf(
handler.__near_param_tokenOwner
);

        let encoder = new JSONEncoder();
      
encoder.setString(null, result.toString());

        let val = encoder.serialize();
        return_value(val.byteLength, <usize>val.buffer);
      
}
export class __near_ArgsParser_allowance extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_allowance>;
        handledRoot: boolean = false;
      
__near_param_tokenOwner: String;
__near_param_spender: String;
setString(name: string, value: String): void {
if (name == "tokenOwner") {
            this.__near_param_tokenOwner = <String>value;
            return;
          }
if (name == "spender") {
            this.__near_param_spender = <String>value;
            return;
          }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "tokenOwner") {
        this.__near_param_tokenOwner = <String>null;
        return;
      }
if (name == "spender") {
        this.__near_param_spender = <String>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {

        return super.pushArray(name);
      }
}
export function allowance(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_allowance();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_allowance>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_allowance(
handler.__near_param_tokenOwner,handler.__near_param_spender
);

        let encoder = new JSONEncoder();
      
encoder.setString(null, result.toString());

        let val = encoder.serialize();
        return_value(val.byteLength, <usize>val.buffer);
      
}
export class __near_ArgsParser_transfer extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_transfer>;
        handledRoot: boolean = false;
      
__near_param_to: String;
__near_param_tokens: u64;
setString(name: string, value: String): void {
if (name == "to") {
            this.__near_param_to = <String>value;
            return;
          }
if (name == "tokens") {
              this.__near_param_tokens = U64.parseInt(value);
              return;
            }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "to") {
        this.__near_param_to = <String>null;
        return;
      }
if (name == "tokens") {
        this.__near_param_tokens = <u64>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {

        return super.pushArray(name);
      }
}
export function transfer(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_transfer();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_transfer>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_transfer(
handler.__near_param_to,handler.__near_param_tokens
);

        let encoder = new JSONEncoder();
      
encoder.setBoolean(null, result);

        let val = encoder.serialize();
        return_value(val.byteLength, <usize>val.buffer);
      
}
export class __near_ArgsParser_approve extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_approve>;
        handledRoot: boolean = false;
      
__near_param_spender: String;
__near_param_tokens: u64;
setString(name: string, value: String): void {
if (name == "spender") {
            this.__near_param_spender = <String>value;
            return;
          }
if (name == "tokens") {
              this.__near_param_tokens = U64.parseInt(value);
              return;
            }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "spender") {
        this.__near_param_spender = <String>null;
        return;
      }
if (name == "tokens") {
        this.__near_param_tokens = <u64>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {

        return super.pushArray(name);
      }
}
export function approve(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_approve();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_approve>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_approve(
handler.__near_param_spender,handler.__near_param_tokens
);

        let encoder = new JSONEncoder();
      
encoder.setBoolean(null, result);

        let val = encoder.serialize();
        return_value(val.byteLength, <usize>val.buffer);
      
}
export class __near_ArgsParser_transferFrom extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_transferFrom>;
        handledRoot: boolean = false;
      
__near_param_from: String;
__near_param_to: String;
__near_param_tokens: u64;
setString(name: string, value: String): void {
if (name == "from") {
            this.__near_param_from = <String>value;
            return;
          }
if (name == "to") {
            this.__near_param_to = <String>value;
            return;
          }
if (name == "tokens") {
              this.__near_param_tokens = U64.parseInt(value);
              return;
            }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "from") {
        this.__near_param_from = <String>null;
        return;
      }
if (name == "to") {
        this.__near_param_to = <String>null;
        return;
      }
if (name == "tokens") {
        this.__near_param_tokens = <u64>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {

        return super.pushArray(name);
      }
}
export function transferFrom(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_transferFrom();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_transferFrom>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_transferFrom(
handler.__near_param_from,handler.__near_param_to,handler.__near_param_tokens
);

        let encoder = new JSONEncoder();
      
encoder.setBoolean(null, result);

        let val = encoder.serialize();
        return_value(val.byteLength, <usize>val.buffer);
      
}