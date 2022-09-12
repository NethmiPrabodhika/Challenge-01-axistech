const axios = require('axios');
const apiResponse = require("../Helpers/apiResponse");

const getRequestedPackages = async (req, res) => {

    const Packagename = req.query.packagename;

    var dependencies;
    var devDependencies;
    var url;
    var homepage;
    var version;
    var description


    try {

        let data = await axios.get("http://registry.npmjs.org/" + Packagename + "/latest");
        console.log(data?.data);

        if (data?.status == 200) {

            devDependencies = data?.data?.devDependencies;
            dependencies = data?.data?.dependencies;
            description = data?.data?.version;
            url = data?.data?.repository?.url;
            homepage = data?.data?.homepage;
            description = data?.data?.description;
        }

        var packageDetails = {
            packageName: Packagename,
            description: description,
            url: url,
            homepage: homepage,
            version: version,
            dependencies: dependencies,
            devDependencies: devDependencies,

        }
        /* Sending a response to the client. */
        apiResponse.Success(res, `${Packagename} Package Found`, { data: packageDetails });

    } catch (error) {
        apiResponse.NotFound(res, "Package Not Found", { err: "Error" });
    }
}


module.exports = {
    getRequestedPackages
};
