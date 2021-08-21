/* We should be using axiosInstance and env variables instead of this */
export class UrlBuilder {
	constructor(base = '', endpoint = '') {
		this.base = base;
		this.endpoint = endpoint;
		this.path = base + endpoint;
	}
	make(id = null) {
		return id ? `${this.path}/${id}` : this.path;
	}
}
