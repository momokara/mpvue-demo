
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

/**
 * 连接数据库 如果没有则创建
 * @param {string} collect 集合名称（表明）
 */
const connect = async (collect) => {
  return new Promise(async (resolve, reject) => {
    let _db
    try {
      await db.createCollection(collect)
      _db = await db.collection(collect)
    } catch (error) {
      console.log(collect, '已存在')
    }
    _db = await db.collection(collect).add({ data: { msg: 'creat OK' } })
    resolve(_db)
  })
}

/**
 * 添加数据
 * @param {string} collect 需要更新的集合名称
 * @param {object} data 存储的数据
 */
const add = async ({ collect, data }) => {
  try {
    await db.createCollection(collect)
  } catch (error) {
    console.log(collect, '已存在')
  }
  data.createTime = db.serverDate()
  data.updataTime = db.serverDate()
  let res = await db.collection(collect).add({ data })
  return res
}

/**
 * 查找数据
 * @param {string} collect 需要更新的集合名称
 * @param {object} filter 过滤条件
 */
const orderBy = async ({ collect, orderKey = 'updataTime', order = 'desc', field }) => {
  try {
    await db.createCollection(collect)
  } catch (error) {
    console.log(collect, '已存在')
  }
  let res = await db.collection(collect).orderBy(orderKey, order).field(field).get()
  return res
}
/**
 * 查找数据
 * @param {string} collect 需要更新的集合名称
 * @param {object} filter 过滤条件
 */
const find = async ({ collect, filter, field }) => {
  try {
    await db.createCollection(collect)
  } catch (error) {
    console.log(collect, '已存在')
  }
  let res = await db.collection(collect).where(filter).field(field).get()
  return res
}

/**
 * 更新数据，如果没有则创建
 * @param {string} collect 需要更新的集合名称
 * @param {object} filter 过滤条件
 * @param {object} data 新数据
 */
const update = async ({ collect, filter, data }) => {
  try {
    await db.createCollection(collect)
  } catch (error) {
    console.log(collect, '已存在')
  }
  data.updataTime = db.serverDate()
  let res = await db.collection(collect).where(filter).get()
  if (res.data.length) {
    res = await db
      .collection(collect)
      .where(filter)
      .update({
        data
      })
  } else {
    res = await db
      .collection(collect)
      .add({
        data
      })
  }
  return res
}

module.exports = {
  connect,
  add,
  find,
  orderBy,
  update
}
