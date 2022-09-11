const axios = require('axios');

const getRequestedPackages = async (req, res) => {

    const Packagename = req.query.packagename;
    var dependencies;
    var devDependencies;
    var url;
    var homepage;
    var version;

    console.log(Packagename);
    try {

        let data = await axios.get("http://registry.npmjs.org/" + Packagename + "/latest");
        console.log(data?.data);
        if (data?.status == 200) {
            devDependencies = data?.data?.devDependencies;
            dependencies = data?.data?.dependencies;
            url = data?.data?.repository?.url;
            homepage = data?.data?.homepage;
            version = data?.data?.version;
        }
        else {
            res.status(404).json({ data: "Package not fount" });
        }
        var packagedetails = {
            packageName: Packagename,
            url: url,
            homepage: homepage,
            version: version,
            dependencies: dependencies,
            devDependencies: devDependencies,
        }
        res.status(200).json({ data: packagedetails });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



module.exports = {
    getRequestedPackages
};
