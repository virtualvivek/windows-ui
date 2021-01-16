
VERSION="2.0"
LICENSE_URL="github.com/virtualvivek/Windows10-framework/blob/master/LICENSE"
FRAMEWORK_RESOURCE="github.com/microsoft/sarif-pattern-matcher/releases/latest"
CREATE_ISSUE="https://github.com/virtualvivek/Windows10-framework/issues/new"
CLONE_REPO="https://github.com/virtualvivek/Windows10-framework.git"
DEMO_URL="https://windows10framework.netlify.app/"
WEBSITE="https://windows10framework.github.io/"

echo "#================================================================"
echo "#                     Windows10 framework"
echo "#================================================================"

echo "#================================================================"
echo "#-    IMPLEMENTATION"
echo "#-    version         ${VERSION}"
echo "#-    author          Vivek Verma"
echo "#-    copyright       Copyright (c) http://www.github.com"
echo "#-    license         MIT License"
echo "#-    license url     ${LICENSE_URL}"
echo "#-"
echo "#================================================================"

echo "#%    OPTIONS"
echo "#%    \$show --info                    Print framework resource information"
echo "#%    \$show --version                 Print script information"

show(){

while [ $# -gt 0 ];
do
    case $1 in
    --version)
        echo "# -----------------------------------------------------------"
        echo "-version : ${VERSION}"
        echo "-resource: ${FRAMEWORK_RESOURCE}"
        echo "# -----------------------------------------------------------"
        ;;
    --info)
        echo "# -----------------------------------------------------------"
        echo "-clone repo    : ${CLONE_REPO}"
        echo "-open an issue : ${CREATE_ISSUE}"
        echo "-live demo     : ${DEMO_URL}"
        echo "-website       : ${WEBSITE}"
        ;;
    # [4-6])
    #     echo "some other cases"
    #     ;;
    # [7,9])
    #     echo "some more other cases"
    #     ;;
    # *)
    #     echo "others"
    #     ;;
    esac
    shift
done

}


