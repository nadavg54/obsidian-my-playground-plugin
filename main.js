/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => UserInputPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var UserInputPlugin = class extends import_obsidian.Plugin {
  async onload() {
    this.addRibbonIcon("smile", "my new smile ribssbon example", () => {
      new import_obsidian.Notice("smile ribbon example");
    });
    this.addCommand({
      id: "adding love emoji",
      name: "add love emojis",
      editorCallback: (editor, view) => {
        const newVal = editor.getValue().replace(/good/gm, (match) => match + "\u{1F493}");
        editor.setValue(newVal);
      }
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgTm90aWNlLCBQbHVnaW4gfSBmcm9tICdvYnNpZGlhbic7XG5cbi8vIFJlbWVtYmVyIHRvIHJlbmFtZSB0aGVzZSBjbGFzc2VzIGFuZCBpbnRlcmZhY2VzIVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5wdXRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuXHRhc3luYyBvbmxvYWQoKSB7XG5cdFx0XG5cdFx0dGhpcy5hZGRSaWJib25JY29uKFwic21pbGVcIiwgXCJteSBuZXcgc21pbGUgcmlic3Nib24gZXhhbXBsZVwiLCgpID0+IHtcblx0XHRcdG5ldyBOb3RpY2UoXCJzbWlsZSByaWJib24gZXhhbXBsZVwiKTtcblx0XHR9KVxuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOlwiYWRkaW5nIGxvdmUgZW1vamlcIixcblx0XHRcdG5hbWU6IFwiYWRkIGxvdmUgZW1vamlzXCIsXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvciwgdmlldykgPT4ge1xuXHRcdFx0XHRjb25zdCBuZXdWYWwgPSBlZGl0b3IuZ2V0VmFsdWUoKS5yZXBsYWNlKC9nb29kL2dtLCAobWF0Y2gpID0+IG1hdGNoICsgXCJcdUQ4M0RcdURDOTNcIilcblx0XHRcdFx0ZWRpdG9yLnNldFZhbHVlKG5ld1ZhbCk7XG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9XG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUErQjtBQUkvQixJQUFxQixrQkFBckIsY0FBNkMsdUJBQU87QUFBQSxFQUNuRCxNQUFNLFNBQVM7QUFFZCxTQUFLLGNBQWMsU0FBUyxpQ0FBZ0MsTUFBTTtBQUNqRSxVQUFJLHVCQUFPLHNCQUFzQjtBQUFBLElBQ2xDLENBQUM7QUFFRCxTQUFLLFdBQVc7QUFBQSxNQUNmLElBQUc7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLGdCQUFnQixDQUFDLFFBQVEsU0FBUztBQUNqQyxjQUFNLFNBQVMsT0FBTyxTQUFTLEVBQUUsUUFBUSxVQUFVLENBQUMsVUFBVSxRQUFRLFdBQUk7QUFDMUUsZUFBTyxTQUFTLE1BQU07QUFBQSxNQUN2QjtBQUFBLElBRUQsQ0FBQztBQUFBLEVBRUY7QUFDRDsiLAogICJuYW1lcyI6IFtdCn0K