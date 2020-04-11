export const generatorBase64Code = (keyLength = 4) => {
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < keyLength; i++) {
    key += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return key;
};

export const generatorViewId = (views) => {
  let view_id, isUnique = false;
  while (!isUnique) {
    view_id = generatorBase64Code(4);

    // eslint-disable-next-line
    isUnique = views.every(item => {return item._id !== view_id;});
    if (isUnique) {
      break;
    }
  }
  return view_id;
};

export const getImageThumbnailUrl = (url) => {
  let { server } = window.dtable;
  let isInternalLink = url.indexOf(server) > -1;
  if (isInternalLink) {
    let imageThumbnailUrl = url.replace('/workspace', '/thumbnail/workspace') + '?size=256';
    return imageThumbnailUrl;
  }
  return url;
};