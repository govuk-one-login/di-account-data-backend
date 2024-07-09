#!
if grep -q "<fill-in-account-id>" /infrastructure/template.yaml; then
    echo "Replacing \"<fill-in-account-id>" with new ECR image ref"
    sed -i "s|<fill-in-account-id>|$TEST_AWS_ACCOUNT|" /infrastructure/template.yaml
else
    echo "WARNING!!! Image placeholder text \"<fill-in-account-id>" not found - uploading template anyway"
fi