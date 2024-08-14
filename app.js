const dataStructures = [
  {
    id: 1,
    label: "Array",
    value: "array",
    operations: [
      {
        id: 1,
        label: "Traversal",
        description: "Visit all the elements of the array once.",
      },
      {
        id: 2,
        label: "Insertion",
        description: "Insert one or multiple elements at any position in the array",
      },
      {
        id: 3,
        label: "Deletion",
        description: "Delete an element at any index in an array.",
      },
    ],
  },
  {
    id: 2,
    label: "Linked List",
    value: "linked-list",
    operations: [
      {
        id: 4,
        label: "Traverse",
        description: "To access each element of the linked list.",
      },
      {
        id: 5,
        label: "Insert",
        description: "To add/insert a new node to the list.",
      },
      {
        id: 6,
        label: "Delete",
        description: "To remove ane existing node from the list.",
      },
      {
        id: 7,
        label: "Search",
        description: "To find a node in the list.",
      },
      {
        id: 8,
        label: "Sort",
        description: "To sort the nodes.",
      },
    ],
  },
  {
    id: 3,
    label: "Stack",
    value: "stack",
    operations: [
      {
        id: 9,
        label: "Push",
        description: "Adds an element to the top of the stack.",
      },
      {
        id: 10,
        label: "Pop",
        description: "Removes the topmost element from the stack.",
      },
      {
        id: 11,
        label: "isEmpty",
        description: "Checks whether the stack is empty.",
      },
      {
        id: 12,
        label: "isFull",
        description: "Checks whether the stack is full.",
      },
      {
        id: 13,
        label: "Top",
        description: "Displays the topmost element of the stack.",
      },
    ],
  },
  {
    id: 4,
    label: "Queue",
    value: "queue",
    operations: [
      {
        id: 14,
        label: "Create",
        description: "Creates and initializes an empty queue",
      },
      {
        id: 15,
        label: "Enqueue",
        description: "Adds an element to the rear of the queue",
      },
      {
        id: 16,
        label: "Dequeue",
        description: "Removes an element from the front of the queue and returns it",
      },
      {
        id: 17,
        label: "Peek",
        description: "Returns the value at the front of the queue without removing it",
      },
      {
        id: 18,
        label: "isEmpty",
        description: "Checks if the queue is empty and returns a boolean value",
      },
      {
        id: 19,
        label: "IsFull",
        description: "Checks if the queue is full",
      },
      {
        id: 20,
        label: "Size",
        description: "Returns the total number of elements in the queue",
      },
      {
        id: 21,
        label: "Front",
        description: "Returns the element at the front of the queue without removing it",
      },
      {
        id: 22,
        label: "Rear",
        description: "Returns the element at the rear of the queue without removing it",
      },
    ],
  },
  {
    id: 5,
    label: "Binary Tree",
    value: "binary-tree",
    operations: [
      {
        id: 23,
        label: "Pre-Order Traversal",
        description:
          "In this traversal, the root is visited first followed by the left and the right subtree.",
      },
      {
        id: 24,
        label: "In-Order Traversal",
        description:
          "In this traversal, the left subtree is visited first followed by the root and the right subtree. ",
      },
      {
        id: 25,
        label: "Post-Order Traversal",
        description:
          "In this traversal, the left subtree is visited first, followed by the right subtree and root node.",
      },
      {
        id: 26,
        label: "Search",
        description: "Search for an element",
      },
      {
        id: 27,
        label: "Height of tree",
        description:
          "Gets the height of the binary tree. This is the longest path from the root node to any leaf node in the tree.",
      },
    ],
  },
];

let selectedDataStructure = dataStructures[0];
let selectedOperation = dataStructures[0].operations[0];

const dataStructureSelector = document.querySelector(
  ".data-structures-selector > .buttons"
);

const operationsSelector = document.querySelector(".operation-selector > .buttons");
const operationNameP = document.querySelector(".result-window > p.operation-name");
const operationDescriptionP = document.querySelector(
  ".result-window > p.operation-description"
);

renderOperations(selectedDataStructure);

renderWindow(selectedDataStructure, selectedOperation);

dataStructures.forEach((dataStructure) => {
  const dataStructureButton = document.createElement("button");

  dataStructureButton.setAttribute("data-structure-id", dataStructure.id);

  dataStructureButton.innerText = dataStructure.label;

  if (dataStructure.id === selectedDataStructure.id)
    dataStructureButton.classList.add("selected");

  dataStructureButton.addEventListener("click", (e) => {
    operationsSelector.innerHTML = "";

    selectedDataStructure = dataStructure;

    const dataStructureButtons = document.querySelectorAll(
      `.data-structures-selector > .buttons > button:not([data-structure-id='${selectedDataStructure.id}'])`
    );

    dataStructureButtons.forEach((button) => {
      button.classList.remove("selected");
    });

    dataStructureButton.classList.add("selected");

    renderOperations(dataStructure);
  });

  dataStructureSelector.appendChild(dataStructureButton);
});

function renderOperations(dataStructure) {
  dataStructure.operations.forEach((operation) => {
    const operationButton = document.createElement("button");

    operationButton.setAttribute("data-operation-id", operation.id);

    operationButton.innerText = operation.label;

    if (operation.id === selectedOperation.id) operationButton.classList.add("selected");

    operationButton.addEventListener("click", handleOperationButtonClick);

    operationsSelector.append(operationButton);

    function handleOperationButtonClick(e) {
      renderWindow(dataStructure, operation);

      selectedOperation = operation;

      const operationButtons = document.querySelectorAll(
        `.operation-selector > .buttons > button:not([data-operation-id='${selectedOperation.id}'])`
      );

      console.log(operationButtons);

      operationButtons.forEach((button) => {
        button.classList.remove("selected");
      });

      operationButton.classList.add("selected");
    }
  });
}

function renderWindow(dataStructure, operation) {
  operationNameP.innerText = operation.label;
  operationDescriptionP.innerText = operation.description;
}
