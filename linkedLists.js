class LinkedList {
  #head;

  constructor(head = new Node()) {
    this.#head = head;
  }

  append(value) {
    // Add node with value as last node
    let node = this.#head;

    while (node) {
      if (node.nextNode === null) { 
        node.nextNode = new Node(value);
        break;
      }
      node = node.nextNode;
    }
  }

  prepend(value) {
    // Add node with value as first node
    let node = this.#head;
    this.#head = new Node(value, node);
  }

  get size() {
    // Return the linked list size
    let count = 0;
    let node = this.#head;

    while (node) {
      count++;
      node = node.nextNode;
    }

    return count;
  }

  get head() {
    // Return the first node
    return this.#head;
  }

  get tail() {
    // Return the last node
    let last = this.#head;

    if (last) {
      while (last.nextNode) {
        last = last.nextNode;
      }
    }

    return last;
  }

  at(index) {
    // Return the node at index
    let count = 0;
    let node = this.#head;

    while (node) {
      if (count === index) return node;
      count++;
      node = node.nextNode;
    }

    return null;
  }

  pop() {
    // Remove the last node
    let node = this.#head;

    while (node) {
      if (node.nextNode.nextNode === null) node.nextNode = null;
      node = node.nextNode;
    }
  } 

  contains(value) {
    // Return true/false if the value exists
    let node = this.#head;

    while(node) {
      if (node.value === value) return true;
      node = node.nextNode;
    }

    return false;
  }

  find(value) {
    // Return index or null of the node if exists
    let node = this.#head;
    let count = 0;

    while(node) {
      if (node.value === value) return count;
      node = node.nextNode;
      count += 1;
    }

    return null;
  }

  toString() {
    // Return the LinkedList as a string
    let node = this.#head;
    let output = '';

    while(node) {
      output += `( ${node.value} ) -> `;
      node = node.nextNode;
    }

    return output + '( null )';
  }

  insertAt(value, index) {
    // Insert node with value at index
    let node = this.#head;
    let count = 0;
    let prev;

    while (node) {
      if (count === index) {
        
        prev.nextNode = new Node(value, node);
        break;
      }
      
      if (count > 0) prev = node;

      node = node.nextNode;
      count += 1;
    }
  }

  removeAt(index) {
    // Remove node at index
    let node = this.#head;
    let count = 0;
    let prev;

    while (node) {
      if (count === index) {
        
        prev.nextNode = node.nextNode;
        break;
      }
      
      if (count > 0) prev = node;

      node = node.nextNode;
      count += 1;
    }
  }
}

class Node {
  #value;
  constructor(value = null, nextNode = null) {
    this.#value = value;
    this.nextNode = nextNode;
  }

  get value() {
    return this.#value;
  }
}


const node = new Node('Balde');

const barça = new LinkedList(node);

barça.append('Araujo');
barça.append('Christensen');
barça.append('Kounde');
barça.append('Pedri');
barça.append('Busquets');
barça.append('De Jong');
barça.append('Gavi');
barça.append('Lewandowski');
barça.append('Raphinha');
barça.prepend('Ter Stegen');

// console.log(barça.size); // 11
// console.log(barça.head.value); // Ter Stegen
// console.log(barça.tail.value); // Raphinha
// console.log(barça.at(6).value); // Busquets
// barça.append('Messi');
// console.log(barça.size); // 12
// barça.pop();
// console.log(barça.size); // 11
// console.log(barça.contains('Gavi')); // True
// console.log(barça.contains('Romario')); // False
// console.log(barça.find('Pedri')); // 5
// console.log(barça.find('Romario')); // Null
// console.log(barça.toString()); // ( Ter Stegen ) -> ( Balde ) -> ( Araujo ) -> ( Christensen ) -> ( Kounde ) -> ( Pedri ) -> ( Busquets ) -> ( De Jong ) -> ( Gavi ) -> ( Lewandowski ) -> ( Raphinha ) -> ( null )
// barça.insertAt('Ronaldinho', 9);
// console.log(barça.size); // 12
// console.log(barça.toString()); // ( Ter Stegen ) -> ( Balde ) -> ( Araujo ) -> ( Christensen ) -> ( Kounde ) -> ( Pedri ) -> ( Busquets ) -> ( De Jong ) -> ( Gavi ) -> ( Lewandowski ) -> ( Ronaldinho ) -> ( Raphinha ) -> ( null )
// barça.removeAt(9);
// console.log(barça.size); // 11

