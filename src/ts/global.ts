export default class Global {
    lib = {
        getHash: function () {
            let mode = null;
            let id = 0;
            let hash = location.hash;
            let hashArr = hash.split('/');

            if (hashArr.length > 1) {
                mode = hashArr[1];

                if (hashArr.length > 2)
                    id = Number(hashArr[2]);
                else
                    id = 0;
            }
            else {
                mode = 'index';
                id = 0;
            }

            return {
                mode: mode,
                id: id
            }
        }
    }
}

export { Global };