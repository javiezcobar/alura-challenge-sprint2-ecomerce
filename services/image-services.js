async function encodeImg(file) {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.addEventListener('loadend', () => {
            resolve(reader.result);
        });
        reader.readAsDataURL(file)
    });
};

async function decodeImg(dataurl, filename) {
    const res = await fetch(dataurl);
    const blob = await res.blob();
    const file = new File([blob], filename, { type: "image/png" });
    return file
}

export const imageServices = {
    decodeImg,
    encodeImg,
}