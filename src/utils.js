export function getRedirectPath({type, avatar}) {
    let url = (type==='employer') ? '/employer' : '/applicant';
    if (!avatar) {
        url += 'info';
    }
    return url;
}