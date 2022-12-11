// 可选链操作符

// ?.   判断?前的数据有没有 没有就是undefined有就继续进行下去   用于多层对象嵌套时使用

function main(config) {
    // const dbHost = config && config.db &&config.db.host   // 不采用?.方法

    const dbHost = config?.db?.host

    console.log(dbHost)
}

main({
    db: {
        host: '192.168.1.100',
        username: 'root'
    },
    cache: {
        host: '192.168.1.200',
        username: 'admin'
    }

})