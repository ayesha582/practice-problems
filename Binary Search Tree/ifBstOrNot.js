// Given a tree find if it is a BST or not

/****
 *
 *          15
 *         /  \
 *        10   20
 *       /  \    \
 *      8    12   25
 *
 *  Above tree is a BST
 *
 *          20 { min = MINIMUM, max = MAXIMUM }
 *         /  \
 *        10   30 { min = 20, max = MAXIMUM }
 *            /  \
 *           5    25 { min = 30, max = MAXIMUM }
 *         { min = 20, max = 30 }
 *
 *  Above tree is not a BST
 *
 * if you are checking the left subtree -
 *  data should be greater than the minimum see the pattern above, and
 *  data should be smaller than the maximum i.e. the just immediate root -> data
 * if you are checking the right subtree -
 *  data should be greater than the minimum i.e. the just immediate root -> data
 *  data should be smaller than the maximum see the pattern above, and
 *
 */
