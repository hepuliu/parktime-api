"use strict"

import express from 'express';
const router = express.Router({mergeParams: true});

export default (knex) => {
    router.get('/', (req, res) => {
        console.log("view all reviews");
        res.status(200).send("");
    })
    // router.post('/:review_id', (req, res) => {
    //     console.log("create a review");
    //     res.status(200).send("");
    // })
    // router.get('/:review_id', (req, res) => {
    //     console.log("view a review");
    //     res.status(200).send("");
    // })
    // router.put('/:review_id', (req, res) => {
    //     console.log("update a review");
    //     res.status(200).send("");
    // })
    // router.delete('/:review_id', (req, res) => {
    //     console.log("delete a review");
    //     res.status(200).send("");
    // })

    router.get('/:user_id/all', (req, res) => {
      console.log(req);
      var user_id = req.params.user_id;
      knex
      .select('*')
      .from('reviews')
      .innerJoin('users', 'reviews.reviewer_id', 'users.user_id')
      .where('reviewee_id', user_id)
      .then((result) => {
        console.log(result);
        res.status(200).json(result);
      }).catch((err) => {
        res.status(500).send(err);
      });
      // knex query
    })
    return router;
}
