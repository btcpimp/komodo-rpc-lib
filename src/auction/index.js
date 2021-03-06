// == Auction ==
// auctionaddress [pubkey]
export function auctionaddress(rpc) {
    return new Promise((resolve, reject) => {
        rpc.auctionaddress().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export default { auctionaddress }