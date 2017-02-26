"use babel";
import { CompositeDisposable } from "atom";
import createWebpackSplitPoint from "@socialtables/create-webpack-split-point";

export default {
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add("atom-workspace", {
      "create-webpack-split-point:split": () => this.create()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  create() {
    const activePane = atom.workspace.getActivePaneItem();
    const filePath = (
      activePane &&
      activePane.buffer &&
      activePane.buffer.file &&
      activePane.buffer.file.path
    );
    if (filePath) {
      createWebpackSplitPoint(filePath);
    }
  }
};
