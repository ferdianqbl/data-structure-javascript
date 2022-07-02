const createNode = (key) => {
  const children = [];
  return {
    key,
    children,
    addChildren: (childKey) => {
      const childNode = createNode(childKey);
      children.push(childNode);

      return childNode;
    },
  };
};

const createTree = (rootKey) => {
  const root = createNode(rootKey);
  return {
    root,
    print: () => {
      let res = "";

      const traverse = (node, visitFn, depth) => {
        visitFn(node, depth);

        if (node.children.length)
          node.children.forEach((child) => {
            traverse(child, visitFn, depth + 1);
          });
      };

      const addKeyToRes = (node, depth) => {
        res +=
          res.length === 0 ? node.key : `\n${" ".repeat(depth * 2)}${node.key}`;
      };

      traverse(root, addKeyToRes, 1);

      return res;
    },
  };
};
