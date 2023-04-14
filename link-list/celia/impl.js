/**
 * 1. 了解什么是链表？
 * 2. 分别使用 js、golang 实现一个链表
 * 3. 分别提供创建链表、节点查找、任意节点插入和删除
 */


class LinkList {
  size = 0;
  head;
  last;

  constructor(opt) {
    this.head = {};
    this.adds(opt);
  }

  create (value, next) {
    return { value, next }
  }

  find (index, checkIndex) {
    if(!index || index >= this.size)  {
      return null;
    }
    if(index < 0) {
      return checkIndex ? null : this.head;
    }

    let curIndex = 0;
    let cur = this.head.next;
    while(curIndex < index) {
      cur = cur.next;
      curIndex++;
    }
    return cur;
  }

  adds(values) {
    let lastItem = this.find(this.size-1);
    if(Array.isArray(values)) {
      values.forEach((val, index) => {
        lastItem.next = this.create(val);
        lastItem = lastItem.next;
        this.size++;
      })
      return  this.size - 1;
    }
    return null;
  }

  add (value) {
    const lastItem = this.find(this.size-1);
    lastItem.next = this.create(value);
    this.size++;
    return this.size - 1;
  }

  insert (value, index) {
    const preItem = this.find(index-1, true);
    if(!preItem) return null;

    const newItem = this.create(value, preItem.next)
    preItem.next = newItem;
    this.size++;
    return newItem;
  }

  del(index) {
    const preItem = this.find(index-1, true);
    if(!preItem) return null;

    const curItem = preItem.next;
    preItem.next = curItem.next;
    this.size--;
    return curItem;
  }


  toString() {
    const resp = [];
    let cur = this.head;
    while(cur.next) {
      cur = cur.next;
      resp.push(cur.value)
    }
    return resp;
  }


}

module.exports = LinkList;
