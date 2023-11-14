import conf from '../conf/conf';
import { Client, Account, ID, Databases, Storage, Query } from 'appwrite';

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userID }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, //document id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID
                }
            )
        } catch (error) {
            console.log(`ERROR IN :: APPWRITE SERVICE :: CREATE POST :: ${error}`);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {


        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, //document id
                {
                    title,
                    content,
                    featuredImage,
                    status

                }
            )
        } catch (error) {
            console.log(`ERROR IN :: APPWRITE SERVICE :: UPDATE POST :: ${Error}`);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

            return true;
        } catch (error) {
            console.log(`ERROR IN :: APPWRITE SERVICE :: DELETE POST :: ${Error}`);

        }

        return false;
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )


        } catch (error) {
            console.log(`ERROR IN :: APPWRITE SERVICE :: GET POST :: ${error}`);

        }
        return false;
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log(`ERROR IN :: APPWRITE SERVICE :: GET POSTS :: ${error}`);
        }

        return false;
    }

    // file  services
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log(`ERROR IN :: APPWRITE SERVICE :: UPLOAD FILE :: ${error}`);
        }

        return false;
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log(`ERROR IN :: APPWRITE SERVICE :: DELETE FILE :: ${error}`);
        }

        return false;
    }

    getFilPreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

    getFileDownload(fileId) {
        return this.bucket.getFileDownload(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service()
export default service;