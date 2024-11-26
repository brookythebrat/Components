import React, { useState } from "react";
import "./TreeView.css";

const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="tree-node">
      {node.children ? (
        <>
          <div className="tree-node__label" onClick={toggleExpand}>
            {isExpanded ? "📂" : "📁"} {node.label}
          </div>
          {isExpanded && (
            <div className="tree-node__children">
              {node.children.map((child, index) => (
                <TreeNode key={index} node={child} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="tree-node__label">📄 {node.label}</div>
      )}
    </div>
  );
};

const TreeView = ({ data }) => {
  return (
    <div className="tree-view">
      {data.map((treeNode, index) => (
        <TreeNode key={index} node={treeNode} />
      ))}
    </div>
  );
};

export default TreeView;
